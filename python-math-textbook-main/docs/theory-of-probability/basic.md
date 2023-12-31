---
sidebar_position: 2
---

# Основные понятия теории вероятностей

import Figure from '@components/Figure'

import Formula from '@components/Formula'

import Highlight from '@components/Highlight'

import useBaseUrl from '@docusaurus/useBaseUrl';

## Теория

Основными понятиями теории вероятностей являются понятия события и вероятности события. В практической деятельности мы
часто сталкиваемся со случайными событиями, т.е. событиями, которые могут произойти или не произойти в результате опыта
по причинам, не поддающимся учету в данных условиях опыта.

Под событием как раз и понимается такой результат эксперимента или наблюдения, который при реализации данного комплекса
условий может произойти или не произойти.

События обозначаются буквами $A,B,C,\ldots$. Если событие неизбежно происходит при каждой реализации данного комплекса
условий, то оно называется **достоверным**; если же событие не может произойти, то оно называется **невозможным**. Если
событие $A$ при реализации комплекса условий может произойти, а может и не произойти, то оно называется **случайным**.

Событие, состоящее в наступлении хотя бы одного из событий $A$ и $B$, называется **суммой** (объединением) событий $A$ и
$B$ и обозначается $A \cup B$.

Событие, состоящее в наступлении обоих событий $A$ и $B$ , называется **произведением** (совмещением) событий $A$ и $B$
и обозначается $A \cap B$.

События называются **несовместными**, если появление одного из них исключает появление других событий в одном и том же
испытании.

Пусть нас интересует появление определенного числа очков на грани при одном бросании игральной кости, довольно частая
ситуация в мире настольных игр. Каждую грань обозначим через $i=1,2,3,4,5,6$.

Выпадение конкретного числа очков назовем _элементарным событием_ или _исходом_, которое принято обозначать $\omega_i$.
Таким образом, для каждого события $A$, связанного с этим опытом, можно выделить совокупность тех элементарных исходов
$\omega_i$, наступление которых влечет за собой наступление события $A$.

Пусть событие $A$ состоит в появлении нечетного числа очков на грани. Этому событию благоприятствуют элементарные
события $\omega_1$, $\omega_3$, $\omega_5$, т.е. некоторое подмножество множества всех элементарных исходов
$\Omega = \{\omega_1,\omega_2,\omega_3,\omega_4,\omega_5,\omega_6\}$. Совокупность всех элементарных событий обозначена
$\Omega$ и называется _пространством элементарных событий_.

Элементарные события взаимно исключают друг друга, а в результате данного опыта обязательно произойдет одно из них.
Пространство элементарных событий образует так называемую _полную группу попарно несовместных событий_. Появление хотя
бы одного из событий полной группы есть достоверное событие.

Два несовместных события, образующих полную группу, называются _противоположными_. Для противоположных событий
одновременно выполняются два условия: $A \cup \bar{A}$ &mdash; достоверное событие и $A \cap \bar{A}$ &mdash;
невозможное событие.

Для количественной оценки возможности появления случайного события вводится понятие его вероятности.

Вероятностью события $A$ называют отношение числа $m$ исходов, благоприятствующих этому событию, к числу $n$ всех
равновозможных несовместных элементарных исходов, образующих полную группу:

<Formula description="(8)">

$P(A)=\cfrac{m}{n}$

</Formula>

Мы уже знаем, что это классическое определение вероятности.

Приведем аксиоматическое определение вероятности (предложенное А. Н. Колмогоровым)

> Каждому случайному событию $A$ из поля событий ставится в соответствие неотрицательное число $P(A)$, называемое
> вероятностью.

$P(\Omega)=1$

**Аксиома сложения**. Если события $A_1,A_2,\dots,A_k$ попарно несовместны, то

$P(A_1 \cup A_2 \cup \dots \cup A_k) =P(A_1)+P(A_2) + \dots + P(A_k)$.

Отсюда следует, что:

1. вероятность невозможного события равна нулю;
2. для любого события $A$ вероятность $P(A)=1-P(\bar A)$, где $\bar A$ &mdash; противоположное событие;
3. каково бы ни было случайное событие $A$, $0 \le P(A) \le 1$.

Следует заметить, что формула (8) имеет ограниченную область применения. Она предполагает, что опыт распадается на
конечное число равновозможных исходов. На практике эти условия часто не выполняются, и для приближенного вычисления
вероятности события определяют его частоту. Под частотой события понимают отношение числа испытаний, в которых это
событие произошло, к общему числу фактически произведенных испытаний. Частоту события называют статистической
вероятностью. Для вычисления частоты события необходимо произвести в действительности испытания (опыт), что не требуется
для определения вероятности.

## Примеры

Закрепим теоретические знания практическими примерами.

<Highlight color="#F4F6F6">

### Пример 1.

В ящике содержится 10 одинаковых деталей, помеченных номерами 1, 2, ..., 10. Наудачу извлечены 6 деталей. Найти
вероятность того, что среди извлеченных деталей окажутся:

- деталь № 1;
- детали № 1 и № 2.

**Решение**

Найдем вероятность найти деталь № 1

Общее число возможных элементарных исходов испытания равно числу способов, которыми можно извлечь 6 деталей из десяти,
т. е. числу сочетаний из 10 по 6 (формула 4). Подсчитаем число исходов, благоприятствующих интересующему нас событию, а
именно, среди отобранных шести деталей есть деталь № 1 и, следовательно, остальные 5 деталей имеют другие номера. Число
таких исходов, очевидно, равно числу способов, которыми можно отобрать 5 деталей из оставшихся девяти, т. е. $C^5_9$.

Искомая вероятность равна отношению числа исходов, благоприятствующих рассматриваемому событию, к общему числу возможных
элементарных исходов:

<Formula description="">

$P=\cfrac{C^5_9}{C^6_{10}}=\cfrac{9!}{5!(9-5)!} \cdot \cfrac{6!(10-6)!}{10!}=0.6$

</Formula>

Теперь найдем вероятность найти деталь № 1 и № 2

Число исходов, благоприятствующих интересующему нас событию (среди отобранных деталей есть детали № 1 и № 2,
следовательно, 4 детали имеют другие номера), равно числу способов, которыми можно отобрать 4 детали из оставшихся
восьми, т. е. $C^4_8$.

<Formula description="">

$P=\cfrac{C^4_8}{C^6_{10}}=\cfrac{8!}{4!(8-4)!} \cdot \cfrac{6!(10-6)!}{10!}= \cfrac{1}{3}$

</Formula>

</Highlight>

<Highlight color="#F4F6F6">

### Пример 2.

В партии из 11 деталей имеется 7 стандартных. Наудачу отобраны 5 деталей. Найти вероятность того, что среди отобранных
деталей ровно 3 стандартных.

**Решение**

Общее число возможных элементарных исходов испытания равно числу способов, которыми можно извлечь 5 деталей из 11
деталей, т. е. $C^5_{11}$ &mdash; числу сочетаний из 11 элементов по 5. Подсчитаем число исходов, благоприятствующих
интересующему нас событию, а именно, среди 5 деталей ровно 3 стандартных. Их можно выбрать из 7 стандартных деталей
$C^3_7$ способами; при этом остальные 2 детали должны быть нестандартными. Взять же эти 2 нестандартные детали из 4
нестандартных можно $C^2_4$ способами. Следовательно, число благоприятствующих исходов равно $C^3_{7} \cdot C^2_4$

Искомая вероятность равна отношению числа исходов, благоприятствующих событию, к числу всех элементарных исходов:

<Formula description="">

$P=\cfrac{C^3_{7} \cdot C^2_4}{C^5_{11}}=\cfrac{8!}{3! \cdot 4!} \cdot \cfrac{4!}{2! \cdot 2!} \cdot \cfrac{5! \cdot 6!}{11!} = \cfrac{5}{11}$

</Formula>

</Highlight>

<Highlight color="#F4F6F6">

### Пример 3.

Монета подбрасывается 3 раза. Наблюдаются следующие события:

- $A$ ={герб выпал 1 раз}
- $B$ ={ни разу не выпала решка}
- $C$ ={выпало больше гербов, чем решек}
- $D$ ={герб выпал не менее, чем 2 раза подряд}

Необходимо описать вероятностное пространство и каждое из событий. Определить вероятности каждого из событий.

**Решение**

Для наглядности обозначим герб через $\bigotimes$, а решку через $\bigodot$.

Таким образом, вероятностное пространство имеет вид:

<Formula description="">

$\Omega = \{(\bigotimes,\bigotimes,\bigotimes), \\ 
(\bigotimes,\bigotimes,\bigodot), \\
(\bigodot,\bigotimes,\bigotimes), \\
(\bigotimes,\bigodot,\bigotimes), \\
(\bigotimes,\bigodot,\bigodot), \\
(\bigodot,\bigotimes,\bigodot), \\ 
(\bigodot,\bigodot,\bigotimes), \\
(\bigodot,\bigodot,\bigodot)\}$

</Formula>

Следовательно, число элементарных событий $n=|\Omega|=8$. Аналогично опишем подмножество элементарных исходов каждого из
событий и по формуле (8) определим вероятности:

<hr/>

$A=\{(\bigotimes,\bigodot,\bigodot),(\bigodot,\bigotimes,\bigodot),(\bigodot,\bigodot,\bigotimes)\}$

$m_A=|A|=3$

$P(A)=\cfrac{m_A}{n}=\cfrac{3}{8}$

<hr/>

$B=\{(\bigotimes,\bigotimes,\bigotimes)\}$

$m_B=|B|=1$

$P(B)=\cfrac{m_B}{n}=\cfrac{1}{8}$

<hr/>

$C=\{(\bigotimes,\bigotimes,\bigotimes), (\bigotimes,\bigotimes,\bigodot),(\bigotimes, \bigodot, \bigotimes),(\bigodot,\bigotimes,\bigotimes)\}$

$m_C=|C|=4$

$P(C)=\cfrac{m_C}{n}=\cfrac{1}{2}$

<hr/>

$D=\{(\bigotimes,\bigotimes,\bigotimes), (\bigotimes,\bigotimes,\bigodot),(\bigodot,\bigotimes,\bigotimes)\}$

$m_D=|D|=3$

$P(D)=\cfrac{m_D}{n}=\cfrac{3}{8}$

</Highlight>
