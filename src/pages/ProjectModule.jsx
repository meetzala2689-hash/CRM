import React, { useState } from "react";

// Reusable Input component
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <div className="col-md-6">
    <label htmlFor={name} className="form-label">
      {label}
      {required && " *"}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

function ProjectModule({ addProject }) {

  const [formData, setFormData] = useState({
    projectCode: "",
    projectName: "",
    developerName: "",
    reraCode: "",
    promoterType: "",
    legalStatus: "",
    projectRating: "",
    projectStatus: "",
    projectType: "",
    launchDate: "",
    possessionDate: "",
    notes: "",
  });
  const handleCancel = () => {
    setFormData({
      projectCode: "",
      projectName: "",
      developerName: "",
      reraCode: "",
      promoterType: "",
      legalStatus: "",
      projectRating: "",
      projectStatus: "",
      projectType: "",
      launchDate: "",
      possessionDate: "",
      notes: "",
    });
    setErrors({});
  };
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.projectCode)
      tempErrors.projectCode = "Project Code is required";
    if (!formData.projectName)
      tempErrors.projectName = "Project Name is required";
    if (!formData.developerName)
      tempErrors.developerName = "Developer Name is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addProject(formData); // send project to parent
    setFormData({
      projectCode: "",
      projectName: "",
      developerName: "",
      reraCode: "",
      promoterType: "",
      legalStatus: "",
      projectRating: "",
      projectStatus: "",
      projectType: "",
      launchDate: "",
      possessionDate: "",
      notes: "",
    });
    setErrors({});
  };

  return (
    <div className="container mt-4 user-select-none mb-3">
      <h4 className="mb-3">Add Project</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h5 className="bg-dark text-white p-2 rounded">Basic Details</h5>
          <div className="row g-3">
            <InputField
              label="Project Code"
              name="projectCode"
              value={formData.projectCode}
              onChange={handleChange}
              required
            />
            <InputField
              label="Project Name"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Developer/Promoter Name"
              name="developerName"
              value={formData.developerName}
              onChange={handleChange}
              required
            />
            <InputField
              label="RERA Code"
              name="reraCode"
              value={formData.reraCode}
              onChange={handleChange}
            />
            <InputField
              label="Promoter Type"
              name="promoterType"
              value={formData.promoterType}
              onChange={handleChange}
            />
            <InputField
              label="Legal Status"
              name="legalStatus"
              value={formData.legalStatus}
              onChange={handleChange}
            />
            <InputField
              label="Project Rating"
              name="projectRating"
              value={formData.projectRating}
              onChange={handleChange}
            />
            <InputField
              label="Project Status"
              name="projectStatus"
              value={formData.projectStatus}
              onChange={handleChange}
            />
            <InputField
              label="Project Type"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <h5 className="bg-dark text-white p-2 rounded">Important Dates</h5>
          <div className="row g-3">
            <InputField
              label="Launch Date"
              name="launchDate"
              type="date"
              value={formData.launchDate}
              onChange={handleChange}
            />
            <InputField
              label="Possession Date"
              name="possessionDate"
              type="date"
              value={formData.possessionDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <h5 className="bg-dark text-white p-2 rounded">Notes</h5>
          <textarea
            name="notes"
            className="form-control border-2 mt-3"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Enter notes"
          ></textarea>
        </div>
        <div className="button-group d-flex justify-content-end gap-3">
          <button type="button" className="border-0" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="border-0" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>

      {/* {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger mt-3">
          {Object.values(errors).map((err, idx) => (
            <div key={idx}>{err}</div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default ProjectModule;
