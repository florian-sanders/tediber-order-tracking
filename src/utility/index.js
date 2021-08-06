/* eslint-disable */

export const formatDate = (dateAsString) => new Date(dateAsString).toLocaleDateString('fr-FR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});


export const firstLetterToUpper = (word) => word[0].toUpperCase() + word.substring(1);
