---
sidebar_position: 5
---

# Інтегральне обчислення

import Figure from '@components/Figure'

import Formula from '@components/Formula'

import Highlight from '@components/Highlight'

import useBaseUrl from '@docusaurus/useBaseUrl';

## Первісна та її властивості

У диференціальному обчисленні вирішується таке завдання: за заданою функцією $y=f(x)$ знайти похідну (або
диференціал). Інтегральне обчислення вирішує обернену задачу: знайти функцію $F(x)$, знаючи її похідну $F'(x)=f(x)$.
Шукану функцію $F(x)$ називають **первісною функції** $f(x)$.

Функція $F(x)$ називається первісною функції $f(x)$ на інтервалі $(a,b)$, якщо для кожного $x \in (a,b)$ виконується
рівність $F'(x)=f(x)$ (або $dF(x)=f(x)dx$).

Наприклад, первісною функції $y=x^2$ є функція $F(x)= \cfrac{x^3}{3}$, оскільки
$F'(x)= \left(\cfrac{x^3}{3}\right)'=x^2=f(x)$.

Очевидно, що первісними будуть також будь-які функції $F(x)= \cfrac{x^3}{3}+C$, де $C$ – константа (будь-яке число), оскільки $F'(x)= \left(\cfrac{x^3}{3}+C\right)'=x^2=f(x)$.

Пошук для функції всіх її первісних є основним завданням інтегрального обчислення.

Як бачимо з наведеного вище прикладу, якщо функція має первісну, вона має нескінченне число первісних.

**Теорема**. Якщо $F(x)$ – первісна функції $f(x)$, то і $F(x)+C$, де $C$ – довільна константа, також буде
первісної функції $f(x)$.

З цієї теореми випливає, що достатньо знайти для заданої функції лише одну первісну, щоб знайти всі її первісні функції.

## Невизначений інтеграл

**Визначення**. Сукупність всіх первісних функцій $F(x)+C$ для $f(x)$ називається **_невизначеним інтегралом_**
від функції $f(x)$ і позначається $\int f(x)dx$.

Таким чином, за визначенням

<Formula description="">

$\int f(x)dx=F(x)+C$, де $F'(x)=f(x)$

</Formula>

Тут $f(x)$ називається _підінтегральною функцією_, $f(x)dx$ &mdash; _підінтегральним виразом_, $\int$ &mdash; знайомий
невизначеного інтегралу.

Геометрично невизначений інтеграл є сімейством «паралельних» кривих $y=f(x)$.

Наприклад: якщо $\left( x^3 \right)'=3x^2$, то функція $y=x^3$ є первісною для функції $3x^2$. Тому маємо
$\int 3x^2dx=x^3+C$, – сукупність кубічних парабол. Щоб вибрати первинну, необхідно взяти три конкретні значення константи С:

<Figure description="Рис. 1"> 
<img src={useBaseUrl("/img/module-02/int.png")} /> 
</Figure>

- оскільки точка $M_1(0, 0)$ належить до шуканої кривої, то підставимо її координати до рівняння $y=x^3+C$, отримаємо
  $C = 0$, і в цьому випадку шуканою кривою буде графік функції $y=x^3$.
- оскільки шукана крива проходить через точку $M_2(0, 1)$, то значення константи $C$ знаходимо, підставляючи координати цієї
   точки в рівняння $y=x^3+C$, і отримуємо $C = 1$, а шуканою кривою буде графік функції $y=x^3+1$;
- знаходимо значення константи $C$ з урахуванням того, що шукана крива проходить через точку $M_3(1, 0)$: $0=1^3+C$, тобто
  $C = -1$, а шукана крива $y=x^3-1$. На малюнку всі три криві.

## Найпростіші властивості невизначених інтегралів

Ці властивості випливають із визначення невизначеного інтегралу та аналогічні властивостям похідної. Похідна від
невизначеного інтеграла дорівнює підінтегральної функції, тобто . Диференціал від невизначеного інтеграла дорівнює
підінтегрального виразу, тобто . Невизначений інтеграл від диференціалу певної функції дорівнює сумі цієї
функції та довільної константи, тобто . Постійний множник можна винести за знак інтеграла, тобто . Інтеграл від
алгебраїчної суми дорівнює сумі алгебри інтегралів, тобто .

## Таблиця основних інтегралів

Таблиці
[основних інтегралів](https://uk.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8F_%D1%96%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D0%BB%D1%96%D0%B2)
можуть бути корисні при вирішенні найпростіших завдань, але в сучасних умовах вони втрачають актуальність з розвитком
комп'ютерної алгебри.

## Методи інтегрування

### Метод підстановки чи заміни змінної

Якщо підінтегральна функція має вигляд $f[\phi(x)\cdot\phi'(x)]$, то роблять заміну $\phi(x)=t$ і таким чином від
складної функції переходять до простої $f(t)$. Ввівши заміну $\phi(x)=t$ і продиференціювавши обидві частини цієї рівності,
отримаємо: $\phi'(x)dx=dt$, тобто інтеграл зводиться до табличного. Після взяття отриманого табличного інтегралу,
повертаємось до заміни.

### Метод інтегрування частинами

Нехай $u=u(x)$ и $\nu=\nu(x)$ – неперервні функції, що диференціюються. Відомо що $(u\nu)'=u'\nu+u\nu'$.

Проінтегруємо обидві частини цієї рівності:

$\int (u\nu)'dx=u\nu$, $u'dx=du$ і $\nu'dx=du$ і $\nu'dx=d\nu$, тому $u\nu=\int\nu du + \int u d\nu$, або остаточно
$\int u d\nu = u\nu - \int\nu du$ &mdash; формула інтегрування частинами.

Інтегрування частинами використовується, як правило, коли під знаком інтеграла стоїть добуток функцій різних
класів.

Є також методи інтегрування раціональних дробів, тригонометричних функцій і деяких ірраціональних,
розгляд яких ми пропустимо у конспекті.

## Визначений інтеграл

Нехай на відрізку $[a,b]$ задана неперервна функція $y=f(x)$. Назвемо _криволінійною трапецією_ область, обмежену
графіком функції $f(x)$, віссю $Ox$ та ординатами $x = a$, $x = b$.

<Figure description=""> 
<img src={useBaseUrl("/img/module-02/def_int.png")} /> 
</Figure>

Необхідно обчислити площу цієї трапеції. Для цього розіб'ємо криволінійну трапецію на вузькі смуги, провівши ординати.

<Formula description="">

$x=x_0=a, x=x_1, \ldots, x=x_n=b$

</Formula>

На кожному відрізку $[x_i,x_{i+1}]$ виберемо проміжну точку $c_i$. Площу кожної смужки можна приблизно вважати
рівною до площі прямокутника з основою $x_{i+1}-x_i$ та висотою $f(c_i)$, тобто

<Formula description="">

$S_i=f(c_i)(x_{i+1}-x_i)=f(c_i)\Delta x_i$

</Formula>

Отже, площа всієї криволінійної трапеції приблизно дорівнює сумі площ цих прямокутників:

<Formula description="">

$S \approx \displaystyle\sum_{i=1}^n f(c_i)\Delta x_i$

</Formula>

Чим дрібніше розбиватимемо відрізок $[a,b]$, тобто чим вужче будуть смужки, тим точніше сума площ прямокутників дасть
потрібну площу трапеції. Іншими словами

<Formula description="">

$S \approx \lim\limits_{n \to \infin} f(c_i)\Delta x_i$

</Formula>

де $n$ – кількість точок поділу відрізка $[a,b]$.

Це завдання дає нам таку математичну схему:

Нехай на відрізку $[a,b]$ задана функція $y=f(x)$. Розіб'ємо інтервал $[a,b]$ на $n$ частин точками

<Formula description="">

$a=x_0<x_1<\ldots<x_i<\ldots<x_n=b$

</Formula>

У кожному елементарному відрізку розбивки виберемо довільним чином точки $c_i$ і обчислимо значення функції в цих
точках, тобто знайдемо

<Formula description="">

$f(c_1), f(c_2), \ldots, f(c_n)$

</Formula>

Кожне значення функції $f(c_i)$ помножимо на довжину $x_{i+1}-x_i=\Delta x_i$ відповідного відрізка. Складемо суму всіх
цих добутків:

<Formula description="">

$\sigma = f(c_1)\Delta x_1 + f(c_2)\Delta x_2 + \ldots + f(c_n)\Delta x_n = \displaystyle\sum_{i=1}^n f(c_i)\Delta x_i$

</Formula>

Цю суму називають _інтегральною сумою_ для функції $f(x)$ на відрізку $[a, b]$.

Знайдемо границю цієї суми при наближенні до нуля найбільшої різниці $\Delta x_i$, при цьому кількість відрізків розбивки
необмежено зростає

<Formula description="">

$S = \lim\limits_{n \to \infin} \displaystyle\sum_{i=1}^n f(c_i)\Delta x_i$

</Formula>

Ця границя (якщо вона існує) називається _визначеним інтегралом_ функції $f(x)$ на відрізку $[a, b]$ і позначається
$\displaystyle\int_{a}^b f(x)dx$:

<Formula description="">

$\displaystyle\int_{a}^b f(x)dx = \lim\limits_{n \to \infin} \displaystyle\sum_{i=1}^n f(c_i)\Delta x_i$

</Formula>

Таким чином, визначеним інтегралом функції $f(x)$ на відрізку $[a, b]$ називають границю інтегральних сум за
умови, що найбільший відрізок розбивки прагне до нуля.

## Властивості визначеного інтегралу

1. Інтеграл від алгебраїчної суми функцій дорівнює алгебраїчній сумі інтегралів:

<Formula description="">

$\displaystyle\int_{a}^b (f_1(x) \pm f_2(x))dx = \displaystyle\int_{a}^b f_1(x)dx \pm \displaystyle\int_{a}^b f_2(x)dx$

</Formula>

2. Постійний множник виноситься за знак інтегралу

<Formula description="">

$\displaystyle\int_{a}^b cf(x)dx=c\displaystyle\int_{a}^b f(x)dx$

</Formula>

3. $\displaystyle\int\_{a}^b f(x)dx = -\displaystyle\int_{a}^b f(x)dx$.
4. Якщо функція $f(x)$ інтегрується на $[a,b]$ и $a < c < b$, то

<Formula description="">

$\displaystyle\int_{a}^b f(x)dx = \displaystyle\int_{a}^c f(x)dx \pm \displaystyle\int_{c}^b f(x)dx$

</Formula>

5. Якщо функція $f(x)$ неперервна на $[a, b]$, то існує така точка $c \in [a, b]$, що

<Formula description="">

$\displaystyle\int_{a}^b f(x)dx = f(c)(b-a)$

</Formula>

6. Оцінка інтегралу. Якщо $m$ і $M$ &mdash; відповідно найменше та найбільше значення функції $y=f(x)$ на відрізку
   $[a, b]$, $(a < b>), то

<Formula description="">

$m(b-a) \le \displaystyle\int_{a}^b f(x)dx \le M(b-a)$

</Formula>

## Формула Ньютона-Лейбніца

Нехай функція $y=f(x)$ неперервна на відрізку $[a, b]$ і $F(x)$ &mdash; будь-яка її первісна на $[a, b]$, тоді має
місце формула

<Formula description="">

$\displaystyle\int_{a}^b f(x)dx=F(x)\bigg|_a^b =F(b) - F(a)$

</Formula>

яка називається _формулою Ньютона-Лейбніца_ і використовується для обчислення визначеного інтегралу.

Наприклад, $\displaystyle\int_{2}^3 x^2dx=\cfrac{x^3}{3}\bigg|_2^3 =\cfrac{27}{3} - \cfrac{8}{3}=\cfrac{19}{3}$.

## Методи обчислення визначеного інтегралу

Формула Ньютона-Лейбніца дає загальний метод обчислення визначених інтегралів. Цей метод полягає в тому, що для даної неперервної функції знаходимо будь-яку її первісну, а потім розраховуємо різницю значень цієї первісної при верхній та нижній меожах інтегрування.

Наприклад:
$\displaystyle\int_{\frac{\pi}{6}}^{\frac{\pi}{2}} \cos xdx=\sin x \bigg|_{\frac{\pi}{6}}^{\frac{\pi}{2}} =\sin\cfrac{\pi}{2} - \sin\cfrac{\pi}{6}=1-\cfrac{1}{2}=\cfrac{1}{2}$.

Очевидно, що всі методи обчислення невизначених інтегралів можуть бути використані при обчисленні визначених інтегралів.
При цьому самі обчислення у багатьох випадках значно спрощуються порівняно з обчисленнями, проведеними за загальним методом.
