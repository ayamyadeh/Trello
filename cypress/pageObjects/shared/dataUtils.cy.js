import { APIToken, APIKey } from "../../support/constants.cy"
class shardDataUtils {
    craeteBoard(name) {
        return cy.request("POST", `https://api.trello.com/1/boards/?name=${name}&key=${APIKey}&token=${APIToken}`)


    }
    deleteBoard(id) {
        return cy.request("DELETE", `https://api.trello.com/1/boards/${id}?key=${APIKey}&token=${APIToken}`);
    }
    getListsOnABoard(id) {
        return cy.request("GET", `https://api.trello.com/1/boards/${id}/lists?key=${APIKey}&token=${APIToken}`);
    }
    createCard(listId, nameCard, isTemplate) {
        return cy.request("POST", `https://api.trello.com/1/cards?idList=${listId}&name=${nameCard}&isTemplate=${isTemplate}&key=${APIKey}&token=${APIToken}`);

    }
}
export default shardDataUtils;