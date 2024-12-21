import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { User } from './User'
import { Business } from './Business'

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column({ type: 'text' })
  content: string

  @Column({ type: 'text', array: true, default: [] })
  images: string[]

  @Column({ type: 'jsonb', nullable: true })
  mastodonPost: {
    postId: string
    url: string
  }

  @Column({ type: 'text', array: true, default: [] })
  tags: string[]

  @Column({ default: 0 })
  likes: number

  @Column({ default: 0 })
  shares: number

  @Column({ default: 0 })
  comments: number

  @ManyToOne(() => User, { eager: true })
  author: User

  @ManyToOne(() => Business, { eager: true, nullable: true })
  business: Business

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
