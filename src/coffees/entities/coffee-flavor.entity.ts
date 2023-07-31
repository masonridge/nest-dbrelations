import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Coffee } from './coffee.entity';
import { Flavor } from './flavor.entity';

@Entity({ schema: 'TST' })
export class CoffeeFlavor {
  @PrimaryColumn({ name: 'coffeeId' })
  coffeeId: number;
  @PrimaryColumn({ name: 'flavorId' })
  flavorId: number;

  @ManyToOne(() => Coffee, (coffee) => coffee.flavors, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'coffeeId', referencedColumnName: 'id' }])
  coffees: Coffee[];

  @ManyToOne(() => Flavor, (flavor) => flavor.coffees, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'flavorId', referencedColumnName: 'id' }])
  flavors: Flavor[];

  // @CreateDateColumn()
  // createdDate: Date;

  // @UpdateDateColumn()
  // updatedDate: Date;
}
