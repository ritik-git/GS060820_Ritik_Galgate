import { useState, useEffect } from "react";

const InternetError = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div style={styles.errorContainer}>
      <p style={styles.errorMessage}>⚠️ No Internet Connection. Please check your network.</p>
    </div>
  );
};

const styles = {
  errorContainer: {
    position: "fixed" as "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "red",
    color: "white",
    textAlign: "center" as "center",
    padding: "10px",
    fontWeight: "bold",
    zIndex: 1000,
  },
  errorMessage: {
    margin: 0,
  },
};

export default InternetError;
