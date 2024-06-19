export interface ICategoryInteractor {
  addCategory(): Promise<void>;
  renameCategory(): Promise<void>;
  getCategory(): Promise<void>;
  getCategories(): Promise<void>;
  deleteCategory(): Promise<void>;
}
