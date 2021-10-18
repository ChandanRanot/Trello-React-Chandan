const API_KEY = "59be9081e871a0cb2eedeb2bbc587255";
const API_TOKEN =
  "df5cc2b6532a46974374003ce1586a58ded58e9fb44e56e6ba64bda0c96976a7";

export function getBoards() {
  const response = fetch(
    `https://api.trello.com/1/members/me/boards/?key=${API_KEY}&token=${API_TOKEN}`
  );

  return response;
}

export function getLists(boardId) {
  const response = fetch(
    `https://api.trello.com/1/boards/${boardId}/lists?key=${API_KEY}&token=${API_TOKEN}`
  );

  return response;
}

export function createBoard(name) {
  const response = fetch(
    `https://api.trello.com/1/boards/?name=${name}&key=${API_KEY}&token=${API_TOKEN}`,
    {
      method: "POST",
    }
  );
  return response;
}

export function addNewList(name, boardId) {
  const response = fetch(
    `https://api.trello.com/1/lists?name=${name}&idBoard=${boardId}&key=${API_KEY}&token=${API_TOKEN}`,
    {
      method: "POST",
    }
  );
  return response;
}

// export function deleteList(listId) {
//   const res = fetch(
//     `https://api.trello.com/1/lists/${listId}/closed&key=${API_KEY}&token=${API_TOKEN}`,
//     {
//       method: "PUT",
//     }
//   );
//   return res;
// }

export function getCards(listId) {
  const response = fetch(
    `https://api.trello.com/1/lists/${listId}/cards/?key=${API_KEY}&token=${API_TOKEN}`
  );
  return response;
}

export function addCard(listId, name) {
  const response = fetch(
    `https://api.trello.com/1/cards?idList=${listId}&name=${name}&key=${API_KEY}&token=${API_TOKEN}`,
    {
      method: "POST",
    }
  );
  return response;
}

export function removeCard(listId) {
  fetch(
    `https://api.trello.com/1/cards/${listId}?key=${API_KEY}&token=${API_TOKEN}`,
    {
      method: "DELETE",
    }
  );
}
