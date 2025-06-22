export const getRecommendedEvents = (events, preferences) => {
    return events.filter(event => preferences.includes(event.category));
  };
  