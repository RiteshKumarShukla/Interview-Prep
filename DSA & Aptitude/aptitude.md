Q1). There are three anst sitting on three corners of a tringle . All  ants randomly pick a direction and start moving along edge of the triangle . What is the probability that any two ants collide?

A). To determine the probability that any two ants will collide, we can consider the possible scenarios in which a collision can occur and calculate the probability for each scenario. Let's analyze the different cases:

All ants move in the same direction: In this case, the ants will never collide as they are all moving in the same direction along the edges of the triangle. The probability of this scenario is 0.

Two ants move in the same direction, and one moves in the opposite direction: In this case, the two ants moving in the same direction will collide. The ant moving in the opposite direction will pass between them without colliding. There are three possible pairs of ants that can be moving in the same direction. The probability of this scenario is (1/2) * (1/2) * 3 = 3/4.

One ant moves clockwise, one ant moves counterclockwise, and one ant moves in the opposite direction: In this case, all three ants will collide at the center of the triangle. The probability of this scenario is (1/2) * (1/2) * (1/2) = 1/8.

To find the total probability of any two ants colliding, we sum up the probabilities of the different cases:

Probability = Probability of case 2 + Probability of case 3
= 3/4 + 1/8
= 6/8 + 1/8
= 7/8

Therefore, the probability that any two ants will collide is 7/8, or approximately 0.875, assuming all directions are chosen with equal probability.









Q2). A man is allocated to a task . He doubles the task done everyday . If the man completely does the task in 18 days, how many days did it take for the man to complete 25% of the task?

A). To solve this problem, we can work backwards from the total number of days it took for the man to complete the task.

Let's assume that it took the man "x" number of days to complete 25% of the task.

Given that the man doubles the task done every day, we can conclude that on the previous day (day "x-1"), the man would have completed 50% of the task (doubled from day "x-2").

Similarly, on day "x-2", the man would have completed 25% of the task.

Therefore, we can set up the following equation:

25% of the task = 50% of the task * 0.5

Simplifying this equation, we have:

0.25 = 0.5 * 0.5

0.25 = 0.25

This equation is true, indicating that the man completed 25% of the task on day "x-2".

Therefore, it took the man "x-2" days to complete 25% of the task.

Since we are given that the man completely does the task in 18 days, we can substitute this value into our equation:

18 - 2 = 16

Therefore, it took the man 16 days to complete 25% of the task.






Q3). You are blindfolded and 10 coins are placed in front of you on the table, You are allowed to touch the coins but can not tell which way up they are by feel. You are told that there are 5 coins head up , and 5 coins tells up but not which ones are which. can you make two piles of coins each with tha name number of heads up ? You can filp the coins any number of times.

A). Yes, it is possible to make two piles of coins with the same number of heads up. Here's how you can do it:

Divide the coins into two groups of 5 each.

Flip all the coins in one group. This means if a coin was initially heads up, flip it to tails up, and if it was tails up, flip it to heads up.

Now, we have two groups of coins, one with the original orientation and the other with all the coins flipped.

Take one coin from the first group and one coin from the second group and place them in separate piles, keeping track of their initial orientation (heads or tails).

Repeat step 4 four more times, selecting one coin from each group each time and placing them in the respective piles.

By following these steps, you'll end up with two piles of coins, each containing 5 coins with the same number of heads up. The reason this works is that if the original orientation of the coins in the first group had n heads up, then the second group would have had 5 - n heads up. When you flip the second group, the orientation of the coins is reversed, so now the second group has n heads up and the first group has 5 - n heads up.

Note that during this process, you are allowed to flip the coins any number of times to change their orientation, but you cannot determine the orientation of any individual coin by touch alone.







Q4). A patch if lily pads covers an area within a lake, and the patch doubles its size every day . If it takes 48 days for the lilies to cover the entire lake. How long does it take to cover half the lake

A). Since the lily patch doubles in size every day, we can work backward to determine how many days it would take to cover half the lake.

Given that it takes 48 days for the lilies to cover the entire lake, we can assume that on the day before, the lilies would have covered half the lake.

Let's denote the number of days it takes to cover half the lake as "x". On the day before (x-1), the lilies would have covered half the lake, which means the patch would be half its final size.

If the patch doubles in size every day, then on the previous day (x-2), it would have been half the size of the patch on day (x-1). Continuing this pattern, on day 1, the patch would have been half the size of the patch on day 2.

Therefore, we can set up the following equation:

(1/2) * 2 * 2 * 2 * ... (x times) = 1/2

Simplifying the equation, we have:

(1/2) ^ (x-1) = 1/2

Taking the logarithm of both sides with base 2, we have:

log₂((1/2) ^ (x-1)) = log₂(1/2)

(x-1) * log₂(1/2) = -1

(x-1) * (-1) = -1

x - 1 = 1

x = 2

Therefore, it would take 2 days for the lilies to cover half the lake.







Q5). In a country , all families want a boy. They keep having babies till a boy is born. What is the expected ratio of boys and girls in country. Solve in jhs
ChatGPT
To solve this problem, we can use the concept of probability to determine the expected ratio of boys and girls in the country.

Let's assume that the probability of having a boy is "p" and the probability of having a girl is "q" (where p + q = 1).

In each family, the probability of having a boy on the first child is "p". If the family doesn't have a boy on the first child, they continue having children until a boy is born. The probability of having a girl on each subsequent child is "q" (since they keep having babies until a boy is born).

Now, let's calculate the expected ratio of boys and girls in the country:

The probability of having only one child (a boy) is p.
The probability of having two children (girl-boy) is q * p.
The probability of having three children (girl-girl-boy) is q * q * p.
The probability of having four children (girl-girl-girl-boy) is q * q * q * p.
And so on.
The expected ratio of boys and girls can be calculated as the sum of the probabilities for each scenario multiplied by the number of boys in that scenario. Since the ratio is typically expressed as the number of boys per girl, we can divide the sum of the probabilities by the number of girls.

Let's represent the expected ratio as "R":

R = (1 * p + 2 * q * p + 3 * q * q * p + 4 * q * q * q * p + ...) / (1 * q * p + 2 * q * q * p + 3 * q * q * q * p + ...)

Simplifying this equation, we have:

R = (p / q) / (1 + q + q^2 + q^3 + ...)

Using the sum of an infinite geometric series formula, we can simplify the denominator:

R = (p / q) / (1 / (1 - q))

Simplifying further, we have:

R = p / (q * (1 - q))

Therefore, the expected ratio of boys to girls in the country is p / (q * (1 - q)).
