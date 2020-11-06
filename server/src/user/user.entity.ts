import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

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

  @Column({default: true})
  isAcitve: boolean
}