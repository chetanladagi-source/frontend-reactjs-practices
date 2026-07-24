import { useCallback, useEffect, useRef, useState } from "react";
import { fetchUsers } from "../services/userService";
import type { User } from "../types/user";
import { useIntersectionObserver } from "./useIntersectionObserver";

const PAGE_SIZE = 10;

export function useInfiniteUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const isFetchingRef = useRef(false);

  // Current page number
  const pageRef = useRef(1);

  // Used to cancel an ongoing request
  const abortControllerRef = useRef<AbortController | null>(null);

  const loadMore = useCallback(async () => {
    if (isFetchingRef.current || !hasMore) {
      return;
    }

    isFetchingRef.current = true;
    setLoading(true);
    setError("");

    try {
      const response = await fetchUsers(pageRef.current, PAGE_SIZE);

      setUsers((previous) => [...previous, ...response.data]);

      setHasMore(response.hasMore);

      pageRef.current += 1;
    } catch (error) {
      setError("Unable to load users");
    } finally {
      isFetchingRef.current = false;
      setLoading(false);
    }
  }, [hasMore]);

  const sentinelRef = useIntersectionObserver({
    enabled: hasMore,
    onIntersect: loadMore,
  });

  useEffect(() => {
    loadMore();

    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  return {
    users,
    loading,
    error,
    hasMore,
    sentinelRef,
  };
}
