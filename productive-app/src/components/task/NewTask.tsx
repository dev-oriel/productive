"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

/** COMPONENT */
const NewTask: React.FC = () => {
  /**VARIABLES */
  const TaskSchema = Yup.object().shape({
    title: Yup.string().required("Task title is required"),
    description: Yup.string(),
    dueDate: Yup.date().nullable(),
    priority: Yup.string().required(),
  });

  const initialValues = {
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
  };

  /**FUNCTIONS*/
  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log("Task Created:", values);

    toast("Task created successfully!", {
      className: "bg-sky-300 text-white rounded-xl shadow-md px-4 py-2",
    });

    resetForm();
  };

  /**TEMPLATE */
  return (
    <div className="w-full flex justify-center mt-50">
      <div className="w-full max-w-xl rounded-xl border border-gray-200 shadow-sm p-8 bg-rgb(252, 252, 252)">
        <h2 className="text-lg font-semibold mb-6">Create New Task</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={TaskSchema}
          onSubmit={handleSubmit}
        >
          {({ handleReset }) => (
            <Form className="space-y-6">
              {/**TASK TITLE */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Task Title *
                </label>
                <Field
                  name="title"
                  type="text"
                  placeholder="e.g., Finish project report"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 
                    focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <ErrorMessage
                  name="title"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* DESCRIPTION  */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Add any additional details..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 
                    focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/**DUE DATE */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Due Date
                </label>
                <div className="flex gap-3">
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              {/**PRIORITY */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Priority
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Field type="radio" name="priority" value="low" />
                    <span>Low</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <Field type="radio" name="priority" value="medium" />
                    <span>Medium</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <Field type="radio" name="priority" value="high" />
                    <span>High</span>
                  </label>
                </div>
                <ErrorMessage
                  name="priority"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/**BUTTONS */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Create Task
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewTask;
