import http from "../../http-commom";

class UsuarioDataService {
    create(data) {
        return http.post("/usuarios", data);
      }

//   getAll() {
//     return http.get("/tutorials");
//   }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//
//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new UsuarioDataService();