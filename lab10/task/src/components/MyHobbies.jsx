


export function MyHobbies(){

    const hobbies = ["Watching movie", "Long drive", "Reading books", "Creative Writing", "Coding", "Travel"];

    return(
        <div>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      );
    };

    