import { useEffect, useState } from "react";

const debounceSearchText = ({ searchText, delay = 1000 }) => {
  const [debounceSearchText, setDebounceSearchText] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceSearchText(searchText.trim());
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  return debounceSearchText;
};

export default debounceSearchText;
