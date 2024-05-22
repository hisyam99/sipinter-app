package handlers

import (
    "encoding/json"
    "net/http"
    "backend/models"
    "github.com/gorilla/mux"
   // "gorm.io/gorm"
    "backend/utils"
    //"strconv"
)

func GetServices(w http.ResponseWriter, r *http.Request) {
    var services []models.Service
    utils.DB.Find(&services)
    json.NewEncoder(w).Encode(services)
}

func GetService(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    var service models.Service
    if err := utils.DB.First(&service, params["id"]).Error; err != nil {
        http.Error(w, err.Error(), http.StatusNotFound)
        return
    }
    json.NewEncoder(w).Encode(service)
}

func CreateService(w http.ResponseWriter, r *http.Request) {
    var service models.Service
    json.NewDecoder(r.Body).Decode(&service)
    utils.DB.Create(&service)
    json.NewEncoder(w).Encode(service)
}

func UpdateService(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    var service models.Service
    if err := utils.DB.First(&service, params["id"]).Error; err != nil {
        http.Error(w, err.Error(), http.StatusNotFound)
        return
    }
    json.NewDecoder(r.Body).Decode(&service)
    utils.DB.Save(&service)
    json.NewEncoder(w).Encode(service)
}

func DeleteService(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    var service models.Service
    if err := utils.DB.First(&service, params["id"]).Error; err != nil {
        http.Error(w, err.Error(), http.StatusNotFound)
        return
    }
    utils.DB.Delete(&service)
    w.WriteHeader(http.StatusNoContent)
}
