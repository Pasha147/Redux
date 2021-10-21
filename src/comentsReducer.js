import {
  COMENT_CREATE,
  COMENT_UPDATE,
  COMENT_DELETE,
  COMMENTS_LOAD,
} from "./types";

const initialState = {
  comments: [],
};

export const comentsReducer = (state = initialState, action) => {
  console.log("coments_Reducer >", action);

  switch (action.type) {
    case COMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case COMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((item) => item.id === data.id);
      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];

      const nextComments1 = comments.map((item) =>
        data.id === item.id ? data : item
      );

      //   console.log("nextCom", nextComments);
      //   console.log("nextCom map", nextComments1);

      return {
        ...state,
        comments: nextComments1,
      };
    case COMENT_DELETE:
      // (1:37:50) const { data } = action; ошибка, уже есть такое объявление
      // решение: нужно воспользоваться конструкцией return (()=>{...})()
      // внутри функции пишем логику, все будет изолировано
      const newComents = state.comments.filter(
        (item) => item.id !== action.data
      );
      return {
        ...state,
        comments: newComents,
      };
    case COMMENTS_LOAD:
      const commentsNew = action.data.map((item) => {
        return {
          text: item.name,
          id: item.id,
        };
      });
      return {
        ...state,
        comments: commentsNew,
      };
    default:
      return state;
  }
};

/*Спасибо за курс. Все понятно и все по делу, толковые примеры. Если можно один вопрос. А можно же массив (1:28:56) nextComments создать через map у меня в одну стоку получилось, делает тоже самое. Или я что то недопонял? Почему именно slice?       
const nextComments1 = comments.map(item => data.id === item.id ? data : item );
Хотя мой вопрос не про redux.*/
