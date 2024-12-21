import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  name: string

  @Column({ nullable: true })
  avatar: string

  @Column({ default: false })
  isBusinessOwner: boolean

  @Column({ type: 'jsonb', nullable: true })
  preferences: {
    interests: string[]
    notifications: {
      email: boolean
      push: boolean
    }
  }

  @Column({ type: 'jsonb', nullable: true })
  mastodonAuth: {
    accountId: string
    accessToken: string
  }

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
