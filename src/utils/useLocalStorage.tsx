const useLocalStorage = (kye: string, data: string[]) => {
  const set = (key: string, data: string) => {
    localStorage.setItem(key, data);
  };
};

export { useLocalStorage };
