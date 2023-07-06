import { useEffect, useState } from "react";

export default function Participant({ user, array }) {
  const token = localStorage.id;
  const [isPay, setIsPay] = useState(false);

  async function containsObject(array, value) {
    const isTrue = array.some((obj) => obj.User["id"] === +value);
    return setIsPay(isTrue);
  }

  function convertToMaskedString(str) {
    if (typeof str !== "string" || str.length === 0) {
      return "";
    }

    const atIndex = str.indexOf("@");
    if (atIndex === -1) {
      // No "@" symbol found, return the masked string for the entire string
      return str.charAt(0) + "*".repeat(str.length - 1);
    }

    const firstChar = str.charAt(0);
    const maskedChars = "*".repeat(atIndex) + str.slice(atIndex);

    return firstChar + maskedChars;
  }

  useEffect(() => {
    containsObject(array, token);
  }, [isPay]);

  return (
    <div className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={user.photoProfile}
            alt="Bonnie image"
          ></img>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {isPay ? user.username : convertToMaskedString(user.username)}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {isPay ? user.email : convertToMaskedString(user.email)}
          </p>
        </div>
      </div>
    </div>
  );
}
