import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const HeroHooks = () => {
  const [success, setsuccess] = useState(false);
  const [load, setload] = useState(false);
  const [email, setemail] = useState("");
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const submitEmail = () => {
    console.log(email);
    if (email.length === 0) {
      toast.error("Enter an email", {
        position: "bottom-left",
        autoClose: 2000,
        toastId: 1,
        theme: "colored",
      });
    } else if (!validRegex.test(email)) {
      toast.error("Enter a valid email", {
        position: "bottom-left",
        autoClose: 2000,
        toastId: 2,
        theme: "colored",
      });
    } else {
      setload(true);
      axios
        .post(
          "https://co-backend-production.up.railway.app/api/v1/mail/subscribe",
          { email },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          setsuccess(true);
          setemail("");
          setload(false);
        })
        .catch((error) => {
          console.log(error);
          setload(false);
          toast.error("An error occurred", {
            position: "bottom-left",
            autoClose: 2000,
            toastId: 2,
            theme: "colored",
          });
        });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setsuccess(false);
    }, 3000);
  }, [success]);

  return { success, setsuccess, setemail, email, submitEmail, load };
};

export default HeroHooks;
