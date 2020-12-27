# Design Pattern Decisions

There are 2 main contracts to clearly separate the concepts:
|Lending Pool | GiftCards Pool  |

**Lending Pool** is the one on charge of keeping the Ethereum added by the lenders and that is available for selling as ETH Gift Cards
**GiftCards Pool** is the one that will maintain the funds transferred from the lending pool when a purchase is made.

This separation of contracts provides:
* Some level of Security since all funds are not in the same contract.
* Possibility to update 1 without affecting the other, in order to call GiftCards Pool contract, an interface was generated so as long as the contract can use the same interface updates can be done.
* Easy comprehension for the developer on where to look for a specific implementation.

Following Design Patterns from the course:
* most of the state variables are private  for restricting access
* circuit breaker to be able to stop new deposits in case an update is required.
* withdrawal pattern in order to make updates before transfers.

