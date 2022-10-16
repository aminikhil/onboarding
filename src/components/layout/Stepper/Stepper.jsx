import { useState, cloneElement, Fragment } from "react";
import Divider from "./Divider";
import "./Stepper.css";

export default function Stepper({ children }) {
  const [activeChild, setActiveChild] = useState(0);

  return (
    <div>
      <div className="Stepper">
        {children.map((child, index) => {
          const cloneChild = cloneElement(child, {
            status: getStatus(index, activeChild),
            index,
            setActiveChild,
          });
          return (
            <Fragment key={`step-${index}`}>
              {cloneChild}
              {index !== children.length - 1 && (
                <Divider status={getStatus(index, activeChild)} />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function getStatus(index, activeChild) {
  return activeChild === index
    ? "active"
    : activeChild > index
    ? "completed"
    : "in-active";
}
