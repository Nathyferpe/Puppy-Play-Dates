import React from "react";
import { useHistory } from "react-router-dom";

const ButtonGetEvent = () => {
  const history = useHistory();
  const [addEventButton, setAddEventButton] = useState(false);

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then((json) => {
        return json.data;
      })
      .then((data) => {
        setAddEventButton(data);
      })
      .then(() => {});
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button style={{ width: "200px" }}>Sign up </button>
    </div>
  );
};

export default ButtonGetEvent;
