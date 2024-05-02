import { CommonEntity } from 'src/modules/common/entity/common';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends CommonEntity {
  @Column()
  username: string;
  @Column()
  fullname: string;
  @Column({ type: 'int' })
  age: number;
  @Column({ nullable: true })
  grade: string;
  @Column({ nullable: true })
  address: string;
}
