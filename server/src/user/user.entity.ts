import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  email: string

  @Column()
  nickname: string

  @Column()
  password: string

  @Column({default: false})
  isAdmin: boolean

  @Column({default: false})
  isSuperUser: boolean

  @Column({default: true})
  isActive: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}