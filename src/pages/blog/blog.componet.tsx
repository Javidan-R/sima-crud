import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosInstance from "core/configs/axios.config";
import { API } from "core/configs/api.config";
import { generateGuid } from "core/helpers/generate-guid";
import { IFormValues } from "pages/form/form";
import FormComponent from "pages/form/form.component";

const BlogComponent: React.FC = () => {
  const [formData, setFormData] = useState<IFormValues[]>([]);

  const onSubmitForm = (values: IFormValues) => {
    setFormData([...formData, values]);
  };
  return (
    <div>
      <ul>
        {formData.map((form: IFormValues, index: number) => (
          <li key={generateGuid()}>
            <h3>Form {index + 1}</h3>
            <p>Title: {form.title}</p>
            <p>Body: {form.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogComponent;
