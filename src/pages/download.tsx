import { useRouter } from "next/router";
import { useEffect } from "react";

const DownloadPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(
      "https://apps.apple.com/us/app/ai-keyboard-easy-smart-type/id1668038748"
    );
    router.push("/");
  }, [router]);

  return null;
};

export default DownloadPage;
