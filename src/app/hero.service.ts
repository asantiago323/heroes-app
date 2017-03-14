import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    //fetches the heroes object (list of heroes)
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}