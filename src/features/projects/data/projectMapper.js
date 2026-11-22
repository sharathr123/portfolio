import { Project } from '../domain/Project';

export function mapProjectDtoToEntity(dto) {
  return new Project(dto);
}
