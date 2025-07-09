'use client';

import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  personalInfo: Yup.object({
    firstName: Yup.string()
      .min(2, 'Too Short')
      .max(50, 'Too Long')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short')
      .max(50, 'Too Long')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    phone: Yup.string()
      .matches(/^[0-9-+()]*$/, 'Invalid phone number')
      .min(10, 'Too Short')
      .max(15, 'Too Long'),
  }),
  preferences: Yup.object({
    topics: Yup.array()
      .of(Yup.string())
      .min(1, 'Select at least one topic')
      .required('Required'),
    notifications: Yup.boolean(),
    communicationMethod: Yup.string()
      .oneOf(['email', 'phone', 'both'], 'Invalid selection')
      .required('Required'),
  }),
  skills: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Skill name is required'),
      level: Yup.string().required('Skill level is required'),
    })
  ),
});

const initialValues = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  preferences: {
    topics: [],
    notifications: false,
    communicationMethod: 'email',
  },
  skills: [{ name: '', level: 'beginner' }],
};

const topics = [
  'Artificial Intelligence',
  'Machine Learning',
  'Neural Networks',
  'Computer Vision',
  'Natural Language Processing',
  'Robotics',
];

export default function FormPage() {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(values);
      resetForm();
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a14] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Advanced Form Example</h1>
          <p className="text-gray-400">
            A comprehensive form showcasing Formik and Yup capabilities with dynamic fields and validation.
          </p>
        </div>

        <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/20">
          <Formik
            initialValues={initialValues}
            validationSchema={FormSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, isSubmitting }) => (
              <Form className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="personalInfo.firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <Field
                        name="personalInfo.firstName"
                        className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {errors.personalInfo?.firstName && touched.personalInfo?.firstName && (
                        <div className="text-red-500 text-sm mt-1">{errors.personalInfo.firstName}</div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="personalInfo.lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <Field
                        name="personalInfo.lastName"
                        className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {errors.personalInfo?.lastName && touched.personalInfo?.lastName && (
                        <div className="text-red-500 text-sm mt-1">{errors.personalInfo.lastName}</div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="personalInfo.email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <Field
                        name="personalInfo.email"
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {errors.personalInfo?.email && touched.personalInfo?.email && (
                        <div className="text-red-500 text-sm mt-1">{errors.personalInfo.email}</div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="personalInfo.phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone
                      </label>
                      <Field
                        name="personalInfo.phone"
                        className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {errors.personalInfo?.phone && touched.personalInfo?.phone && (
                        <div className="text-red-500 text-sm mt-1">{errors.personalInfo.phone}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Preferences Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Preferences</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Topics of Interest</label>
                    <div className="grid grid-cols-2 gap-4">
                      {topics.map(topic => (
                        <div key={topic} className="flex items-center">
                          <Field
                            type="checkbox"
                            name="preferences.topics"
                            value={topic}
                            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <label className="ml-2 text-sm text-gray-300">{topic}</label>
                        </div>
                      ))}
                    </div>
                    {errors.preferences?.topics && touched.preferences?.topics && (
                      <div className="text-red-500 text-sm mt-1">{errors.preferences.topics}</div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center">
                      <Field
                        type="checkbox"
                        name="preferences.notifications"
                        className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <label className="ml-2 text-sm text-gray-300">
                        Receive notifications about new topics and replies
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Communication Method
                    </label>
                    <Field
                      as="select"
                      name="preferences.communicationMethod"
                      className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="both">Both</option>
                    </Field>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-white">Skills</h2>
                  <FieldArray name="skills">
                    {({ push, remove }) => (
                      <div className="space-y-4">
                        {values.skills.map((_, index) => (
                          <div key={index} className="flex items-center space-x-4">
                            <div className="flex-1">
                              <Field
                                name={`skills.${index}.name`}
                                placeholder="Skill name"
                                className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                            <div className="flex-1">
                              <Field
                                as="select"
                                name={`skills.${index}.level`}
                                className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                              >
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                                <option value="expert">Expert</option>
                              </Field>
                            </div>
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="p-2 text-red-400 hover:text-red-300 transition"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => push({ name: '', level: 'beginner' })}
                          className="px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400/10 transition"
                        >
                          Add Skill
                        </button>
                      </div>
                    )}
                  </FieldArray>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-tr from-purple-400 to-pink-400 text-black font-semibold rounded-lg hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
}