import { useEffect, useState } from "react";
import Button from "../ui/Button";

const CookieBanner = () => {
  const COOKIE_NAME = "policyAcceptedBorisovportfolio";
  const COOKIE_VALUE = "true";
  const COOKIE_DAYS = 365;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const cookies = document.cookie.split("; ").map((c) => c.trim());
      const accepted = cookies.some((c) => c.startsWith(`${COOKIE_NAME}=`));
      setIsVisible(!accepted);
    }
  }, []);

  const acceptPolicy = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + COOKIE_DAYS);
    document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}; expires=${expires.toUTCString()}; path=/`;
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="w-full  fixed bottom-4 left-4 z-20 bg-white rounded-[20px] shadow-2xl flex flex-col gap-3 p-3 max-w-48.25 sm:max-w-120.5 sm:flex-row md:flex-col md:max-w-48.25">
      <p className="text-xs tracking-tight font-medium">
        Мы обрабатываем данные посетителей и используем куки согласно{" "}
        <a
          href="/docs/pd-consent"
          target="_blank"
          className="text-green-900 underline font-semibold"
        >
          политике
        </a>
      </p>
      <Button size="sm" onClick={acceptPolicy}>
        OK
      </Button>
    </div>
  );
};

export default CookieBanner;
