import {
  makeObservable, observable, action, computed,
} from 'mobx'

class Store {
  constructor() {
    makeObservable(this)
  }

  @observable loading = false;

  @action updateLoading(data) {
    this.loading = data;
  }

  // Пользователь
  @observable user = null;

  @action updateUser(data) {
    this.user = data;
  }

  // Проекты
  @observable projects = [];

  @action updateProjects(data) {
    this.projects = data;
  }

  @action setActiveProject(props) {
    this.projectId = Number(props.projectId);
    this.structureId = Number(props.structureId);
    this.structure = { ...this.structure }
  }

  @computed get projectsCount() {
    return this.projects.length;
  }

  // Структура
  @observable structure = {};

  @action pushStructure(data) {
    this.structure = {
      ...this.structure,
      [this.structureId]: data
    };
  }

  @computed get currentStructure() {
    return this.structure[this.structureId] || {};
  }

  @computed get getStructureList() {
    return this.currentStructure.children || [];
  }

  @computed get canFetchStructure() {
    return this.structure[this.structureId] === undefined;
  }

  @computed get breadcrumbs() {
    const { breadcrumbs } = this.currentStructure;
    return breadcrumbs || [];
  }

  @computed get showBreadcrumbs() {
    return this.breadcrumbs?.length;
  }
}

export const store = new Store();
