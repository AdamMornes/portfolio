type ContactForm = {
  title: string;
  name: {
    label: string;
    placeholder: string;
    errorRequired: string;
  };
  email: {
    label: string;
    placeholder: string;
    errorRequired: string;
    errorPatterm: string;
  };
  loadingMessage: string;
  message: {
    label: string;
    placeholder: string;
    errorRequired: string;
  };
  serverError: string;
  submit: {
    label: string;
  };
};

export const contactForm: ContactForm = {
  title: 'Contact Form',
  name: {
    label: 'Full Name',
    placeholder: 'Full Name',
    errorRequired: 'Full Name is required',
  },
  email: {
    label: 'Email Address',
    placeholder: 'example@domain.com',
    errorRequired: 'Email Address is required',
    errorPatterm: 'Invalid Email Address',
  },
  loadingMessage: 'Submitting Contact Form....',
  message: {
    label: 'Message',
    placeholder: 'Type your message',
    errorRequired: 'Message is required',
  },
  serverError:
    'There was an issue submitting your message. Please try again later.',
  submit: {
    label: 'Submit',
  },
};
