import React, { useState } from "react";

function useForm(init) {
    const [values, setValues] = useState(init);

    function setValue(value, field) {
        setValues({ ...values, [field]: value });
    }

    function handleChange(event) {
        setValue(event.target.value, event.target.getAttribute("name"));
    }

    function clearForm() {
        setValues(init);
    }

    return {
        values,
        handleChange,
        clearForm,
    }
}

export default useForm;
