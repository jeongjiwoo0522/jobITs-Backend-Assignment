import { Post } from "../model/post";
import { EntityManager, EntityRepository, Repository } from "typeorm";
import { PostRepository } from "../interface";

@EntityRepository(Post)
export class DatabasePostRepository extends Repository<Post> implements PostRepository {
  public findById(id: string): Promise<Post> {
    return this.createQueryBuilder("post")
    .select("post.id")
    .addSelect("post.title")
    .addSelect("post.content")
    .where("post.id = :id", { id })
    .getOne();
  }

  public findAll(): Promise<Array<Post>> {
    return this.createQueryBuilder("post")
    .leftJoin("post.images", "images")
    .getMany();
  }

  public async createNewPost(post: Post, manager: EntityManager): Promise<void> {
    await manager.save(post);
  }

  public async updatePost(post: Post, manager: EntityManager): Promise<void> {
    await manager.save(post);
  }

  public async deletePost(postId: string): Promise<void> {
    await this.delete(postId);
  }
}