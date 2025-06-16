type ContactConfirmation = {
  title: string;
  titleFallback: string;
  message: string;
};

export const contactConfirmation: ContactConfirmation = {
  title: 'Thank you for reaching out, {name}!',
  titleFallback: 'Thank you for reaching out!',
  message:
    'I look forward to hearing what you have to say and I will get back to you as soon as possible.',
};
