import { useState, useEffect } from "react";

const HOTLINE_API_URL = "http://191.101.184.177:5000/api/hotline/public";

// 📞 дефолтные номера (fallback)
const DEFAULT_HOTLINE = {
  active: true,
  label1: "Москва и область",
  phone1: "+7 (983) 250-90-45",
  label2: "Остальные регионы",
  phone2: "+7 (915) 245-30-11",
};

export function useHotline() {
  const [hotline, setHotline] = useState(DEFAULT_HOTLINE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(HOTLINE_API_URL)
      .then((r) => r.json())
      .then((data) => {
        if (data && data.active) {
          setHotline({
            ...DEFAULT_HOTLINE,
            ...data,
          });
        }
      })
      .catch(() => {
        // если ошибка — остаётся DEFAULT
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { hotline, loading };
}