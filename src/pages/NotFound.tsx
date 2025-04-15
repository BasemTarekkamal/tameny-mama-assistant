
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-tameny-light p-4">
      <div className="text-center bg-white rounded-xl p-8 shadow-md max-w-sm w-full">
        <h1 className="text-6xl font-bold mb-4 text-tameny-primary">404</h1>
        <p className="text-xl text-gray-700 mb-6">عفواً، هذه الصفحة غير موجودة</p>
        <Link to="/">
          <Button className="flex items-center gap-2">
            <Home size={18} />
            العودة للصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
