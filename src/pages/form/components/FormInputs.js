import React from "react";

const FormInputs = (props) => {
  const ValidationSchema = {};

  const { type, name, option, required, value } = props;
  const Field = () => {
    switch (type) {
      case "number":
        return (
          <>
            <input
              className="p-1"
              type="number"
              placeholder={`Enter ${name}`}
              value={value}
            />
          </>
        );
      case "radio":
        return (
          <>
            <div className="radios d-flex flex-wrap ">
              {value
                ? option &&
                  option?.map((element, i) => {
                    return (
                      <>
                        <input type="radio" name={name} checked={true} />
                        <label className="mx-2">{element}</label>
                      </>
                    );
                  })
                : option &&
                  option?.map((element, i) => {
                    return (
                      <>
                        {console.log("called without value")}
                        <input type="radio" name={name} />
                        <label className="mx-2">{element}</label>
                      </>
                    );
                  })}
            </div>
          </>
        );

      case "checkbox":
        return (
          <>
            <div className="checks">
              {option &&
                option?.map((element) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        name={name}
                        id={element}
                        value={value}
                      />
                      <label className="mx-2">{element}</label>
                    </>
                  );
                })}
            </div>
          </>
        );

      case "select":
        return (
          <>
            <select id={name} className="p-2" value={value}>
              <option value="" disabled selected hidden>
                Select {name}
              </option>
              {option.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <br />
          </>
        );
      case "textarea":
        return (
          <>
            <textarea value={value} id={name} cols={40} rows={1}></textarea>
            <br />
          </>
        );
      case "date":
        return (
          <>
            <input type="date" id={name} value={value} />
            <br />
          </>
        );
      case "file":
        return (
          <>
            <input className="" type="file" id={name} value={value} />
            <br />
          </>
        );
      default:
        return (
          <>
            <input
              className="p-1"
              type="text"
              placeholder={`Enter ${name}`}
              value={value}
            />
          </>
        );
    }
  };

  return (
    <div className="my-3 d-flex cc border justify-content-space-evenly">
      <div>
        <label className="my-3 mx-2">{name} &nbsp;:</label> &nbsp;&nbsp;&nbsp;
      </div>
      <div className="my-3 dd">{Field()}</div>
    </div>
  );
};

export default FormInputs;
