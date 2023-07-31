import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Coffee } from './coffee.entity';
@Entity({ schema: 'TST' })
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];

  // @CreateDateColumn()
  // createdDate: Date;

  // @UpdateDateColumn()
  // updatedDate: Date;
}
