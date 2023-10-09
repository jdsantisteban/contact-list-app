const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contact: [],
      // urlBase: "https://playground.4geeks.com/apis/fake/contact/",
    },
    actions: {
      getContact: async () => {
        try {
          let response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/agenda/phantom"
          );
          let data = await response.json();

          setStore({
            contact: data,
          });
        } catch (error) {
          console.log(error);
        }
      },

      addContact: async (newContact) => {
        try {
          let response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newContact),
            }
          );
          if (response.ok) {
            getActions().getContact();
          }
        } catch (error) {
          console.log(error);
        }
      },

      deleteContact: async (contact_id) => {
        try {
          let response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${contact_id}`,
            { method: "DELETE" }
          );
          getActions().getContact();
        } catch (error) {
          console.log(error);
        }
      },

      updateContact: async (id, editContact) => {
        try {
          let response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(editContact),
            }
          );
          if (response.ok) {
            getActions().getContact();
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
