/* eslint-disable */

export const formatDate = (dateAsString, displayWeekDay = '') => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (displayWeekDay)
    options.weekday = displayWeekDay;

  return new Date(dateAsString).toLocaleDateString('fr-FR', options);
};


export const firstLetterToUpper = (word) => word[0].toUpperCase() + word.substring(1);
