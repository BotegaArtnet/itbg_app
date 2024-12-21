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

@Entity('businesses')
export class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ type: 'text' })
  description: string

  @Column({ nullable: true })
  logo: string

  @Column({ type: 'jsonb' })
  location: {
    address: string
    city: string
    state: string
    country: string
    coordinates: {
      latitude: number
      longitude: number
    }
  }

  @Column({ type: 'jsonb' })
  hours: {
    monday: { open: string; close: string } | null
    tuesday: { open: string; close: string } | null
    wednesday: { open: string; close: string } | null
    thursday: { open: string; close: string } | null
    friday: { open: string; close: string } | null
    saturday: { open: string; close: string } | null
    sunday: { open: string; close: string } | null
  }

  @Column('text', { array: true, default: [] })
  categories: string[]

  @Column({ type: 'jsonb', nullable: true })
  socialMedia: {
    website?: string
    facebook?: string
    instagram?: string
    twitter?: string
  }

  @Column({ type: 'jsonb', nullable: true })
  mastodonAccount: {
    accountId: string
    username: string
  }

  @ManyToOne(() => User, { eager: true })
  owner: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
