import create from "zustand";

const useWeatherStore = create((set) => ({
  weather: null,
  city: "",
  loading: false,
  error: null,

  setCity: (newCity) => set({ city: newCity }),

  fetchWeather: async () => {
    set({ loading: true, error: null });
    const { city } = useWeatherStore.getState();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3eebf620309d4eb87427c87b20defeda&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        set({ weather: data, loading: false });
      } else {
        set({ error: data.message, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useWeatherStore;
