const questions = [
  /* Category 1 Questions */
  {
    prompt: 'Question 1: What does confidentiality mean in the context of cybersecurity?',
    options: ['a. It means that information is always kept secret and secure.',
    'b. It means that information is only shared with those who need to know.',
    'c. It means that information is made public and freely available.'],
    correctAnswer: 'b. It means that information is only shared with those who need to know.',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Which of the following is a common method used to ensure confidentiality in cybersecurity?',
    options: ['a. Encryption',
    'b. Firewall',
    'c. Backdoor'],
    correctAnswer: 'a. Encryption',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: What is a data breach?',
    options: ['a. An intentional attack on a computer system.',
    'b. A mistake that leads to the accidental exposure of sensitive data.',
    'c. A virus that infects a computer and steals information.'],
    correctAnswer: 'b. A mistake that leads to the accidental exposure of sensitive data.',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What is social engineering?',
    options: ['a. A method used to protect confidential information.',
    'b. A type of encryption algorithm.',
    'c. A technique used to manipulate people into revealing sensitive information.'],
    correctAnswer: 'c. A technique used to manipulate people into revealing sensitive information.',
    cashPrize: 500
    },
    {
    prompt: 'Question 5: What is the difference between Perfect Forward Secrecy (PFS) and Forward Secrecy (FS) in terms of confidentiality and key agreement protocols?',
    options: ['a. PFS is a key agreement protocol that provides confidentiality by generating unique session keys for each session, while FS is a key agreement protocol that provides confidentiality by deriving session keys from long-term keys.',
    'b. PFS is a symmetric encryption protocol that provides confidentiality by generating unique session keys for each session.',
    'c. PFS and FS are both key agreement protocols that provide confidentiality by generating unique session keys for each session.'],
    correctAnswer: 'a. PFS is a key agreement protocol that provides confidentiality by generating unique session keys for each session, while FS is a key agreement protocol that provides confidentiality by deriving session keys from long-term keys.',
    cashPrize: 1000
    },
  /* Category 2 Questions */
  {
    prompt: 'Question 1: What does integrity mean in the context of cybersecurity?',
    options: ['a. It means that information is always kept secret and secure.',
    'b. It means that information is only shared with those who need to know.',
    'c. It means that information is accurate and trustworthy.'],
    correctAnswer: 'c. It means that information is accurate and trustworthy.',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Which of the following is NOT a common threat to integrity in cybersecurity?',
    options: ['a. Social engineering attacks.',
    'b. Malware infections.',
    'c. Data manipulation.'],
    correctAnswer: 'a. Social engineering attacks.',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: What is the purpose of a digital signature in cybersecurity?',
    options: ['a. To prevent unauthorized access to data.',
    'b. To verify the authenticity and integrity of data.',
    'c. To encrypt data to prevent unauthorized disclosure.'],
    correctAnswer: 'b. To verify the authenticity and integrity of data.',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: Which of the following is a common way to ensure data integrity in cybersecurity?',
    options: ['a. Implementing access controls.',
    'b. Performing regular backups.',
    'c. Using encryption to protect data at rest and in transit.'],
    correctAnswer: 'c. Using encryption to protect data at rest and in transit.',
    cashPrize: 500
    },
    {
    prompt: 'Question 5: What is the difference between data-at-rest and data-in-transit protection methods, and how do they relate to the integrity of data?',
    options: ['a. Data-at-rest protection methods ensure that data is secure when it is stored in databases or on physical media, while data-in-transit protection methods ensure that data is secure when it is transmitted over networks or between devices.',
    'b. Data-at-rest protection methods only encrypt data when it is in transit between devices, while data-in-transit protection methods only encrypt data when it is stored on physical media.',
    'c. Data-at-rest protection methods only encrypt data when it is stored on physical media, while data-in-transit protection methods only encrypt data when it is transmitted over networks or between devices.'],
    correctAnswer: 'a. Data-at-rest protection methods ensure that data is secure when it is stored in databases or on physical media, while data-in-transit protection methods ensure that data is secure when it is transmitted over networks or between devices.',
    cashPrize: 1000
    },
  /* Category 3 Questions */
  {
    prompt: 'Question 1: What does availability mean in the context of cybersecurity?',
    options: ['a. It means that information is always kept secret and secure.',
    'b. It means that information is only shared with those who need to know.',
    'c. It means that information is accessible when needed.'],
    correctAnswer: 'c. It means that information is accessible when needed.',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Which of the following is NOT a common threat to availability in cybersecurity?',
    options: ['a. DDoS attacks',
    'b. Malware infections',
    'c. Backup solutions'],
    correctAnswer: 'c. Backup solutions',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: What is a denial-of-service (DoS) attack?',
    options: ['a. An attack that steals data from a computer system.',
    'b. An attack that blocks access to a computer system.',
    'c. An attack that modifies data in a computer system.'],
    correctAnswer: 'b. An attack that blocks access to a computer system.',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: Which of the following is a common way to prevent or mitigate the impact of a DoS attack?',
    options: ['a. Installing antivirus software',
    'b. Implementing firewalls',
    'c. Using content delivery networks (CDNs)'],
    correctAnswer: 'c. Using content delivery networks (CDNs)',
    cashPrize: 500
    },
    {
    prompt: 'Question 5: What is the difference between the Mean Time Between Failure (MTBF) and Mean Time to Recovery (MTTR) in a system\'s availability?',
    options: ['a. MTBF is the average time between system failures, while MTTR is the average time it takes to recover from a failure and restore the system to normal operation.',
    'b. MTBF and MTTR are interchangeable terms that refer to the same metric.',
    'c. MTBF is the average time it takes to recover from a failure and restore the system to normal operation, while MTTR is the average time between system failures.'],
    correctAnswer: 'a. MTBF is the average time between system failures, while MTTR is the average time it takes to recover from a failure and restore the system to normal operation.',
    cashPrize: 1000
    },
  /* Category 4 Questions */
  {
    prompt: 'Question 1: What does defense in depth mean in the context of cybersecurity?',
    options: ['a. It means having a single layer of security to protect a system.',
    'b. It means having multiple layers of security to protect a system.',
    'c. It means not having any security in place.'],
    correctAnswer: 'b. It means having multiple layers of security to protect a system.',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Which of the following is NOT a layer of defense in depth?',
    options: ['a. Firewall',
    'b. Antivirus software',
    'c. Network architecture'],
    correctAnswer: 'c. Network architecture',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: What is the purpose of defense in depth?',
    options: ['a. To protect against a single point of failure in security measures.',
    'b. To make it easier to manage security measures.',
    'c. To reduce the need for security awareness training.'],
    correctAnswer: 'a. To protect against a single point of failure in security measures.',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: Which of the following is a benefit of using defense in depth?',
    options: ['a. It is easier and less expensive to implement than other security measures.',
    'b. It reduces the need for frequent security updates.',
    'c. It provides greater security against multiple types of attacks.'],
    correctAnswer: 'c. It provides greater security against multiple types of attacks.',
    cashPrize: 500
    },
    {
    prompt: 'Question 5: What are some of the challenges of implementing defense in depth, and how can these challenges be overcome to ensure a robust and effective security strategy?',
    options: ['a. Challenges of implementing defense in depth include the cost and complexity of implementing multiple layers of security, the risk of creating security gaps between layers, and the need for ongoing maintenance and updates to ensure that all layers remain effective.',
    'b. Implementing defense in depth is a straightforward process that involves simply adding more layers of security to a system.',
    'c. Challenges of implementing defense in depth include the lack of available security technologies to implement multiple layers of security, the low cost of implementing multiple layers of security, and the inability to integrate multiple layers of security.'],
    correctAnswer: 'a. Challenges of implementing defense in depth include the cost and complexity of implementing multiple layers of security, the risk of creating security gaps between layers, and the need for ongoing maintenance and updates to ensure that all layers remain effective.',
    cashPrize: 1000
    },
  /* Category 5 Questions */
  {
    prompt: 'Question 1: What does it mean to "think like an adversary" in the context of cybersecurity?',
    options: ['a. It means trying to break into systems to test their security.',
    'b. It means assuming that everyone is a potential attacker.',
    'c. It means ignoring potential vulnerabilities in a system.'],
    correctAnswer: 'a. It means trying to break into systems to test their security.',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Why is it important to think like an adversary in cybersecurity?',
    options: ['a. To identify potential vulnerabilities in a system.',
    'b. To develop effective security measures.',
    'c. To help users create strong passwords.'],
    correctAnswer: 'b. To develop effective security measures.',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: What is the purpose of a penetration test in cybersecurity?',
    options: ['a. To determine the strength of a system\'s security measures.',
    'b. To test the performance of a system\'s hardware components.',
    'c. To identify vulnerabilities in a system\'s operating system.'],
    correctAnswer: 'a. To determine the strength of a system\'s security measures.',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What is a benefit of thinking like an adversary in cybersecurity?',
    options: ['a. It can help identify potential vulnerabilities before attackers do.',
    'b. It can reduce the need for security awareness training.',
    'c. It can make security measures less effective.'],
    correctAnswer: 'a. It can help identify potential vulnerabilities before attackers do.',
    cashPrize: 500
    },
    {
    prompt: 'Question 5: What are some key tactics and techniques used by Advanced Persistent Threat actors in cybersecurity?',
    options: ['a. Some key tactics and techniques used by Advanced Persistent Threat actors include social engineering, spear phishing, malware delivery, and network reconnaissance, among others.',
    'b. APT actors use the same tactics and techniques as traditional hackers and can be defended against using traditional cybersecurity measures.',
    'c. Key tactics and techniques used by APT actors include denial-of-service (DoS) attacks, port scanning, and network probing.'],
    correctAnswer: 'a. Some key tactics and techniques used by Advanced Persistent Threat actors include social engineering, spear phishing, malware delivery, and network reconnaissance, among others.',
    cashPrize: 1000
    },
  /* Category 6 Questions */
  {
    prompt: 'Question 1: What does "keep it simple" mean in the context of cybersecurity?',
    options: ['a. It means using complex and advanced security measures to protect a system.',
    'b. It means using simple and easy-to-understand security measures to protect a system.',
    'c. It means not using any security measures at all.'],
    correctAnswer: 'b. It means using simple and easy-to-understand security measures to protect a system.',
    cashPrize: 10
    },
    {
    prompt: 'Question 2: Which of the following is NOT a reason why it is important to keep cybersecurity measures simple?',
    options: ['a. To reduce the risk of human error.',
    'b. To increase the cost of implementing security measures.',
    'c. To make security measures easier to manage.'],
    correctAnswer: 'b. To increase the cost of implementing security measures.',
    cashPrize: 50
    },
    {
    prompt: 'Question 3: What is the purpose of a security audit in cybersecurity?',
    options: ['a. To identify potential vulnerabilities in a system.',
    'b. To test the performance of a system\'s hardware components.',
    'c. To develop new security measures for a system.'],
    correctAnswer: 'a. To identify potential vulnerabilities in a system.',
    cashPrize: 100
    },
    {
    prompt: 'Question 4: What is a benefit of keeping cybersecurity measures simple?',
    options: ['a. It can make security measures easier to use and manage.',
    'b. It can make security measures more complex and difficult to understand.',
    'c. It can increase the risk of human error.'],
    correctAnswer: 'a. It can make security measures easier to use and manage.',
    cashPrize: 500
    },
    {
    prompt: 'Question 5: What are the tradeoffs between simplicity and complexity in cybersecurity, and how can organizations balance these tradeoffs to create a security strategy that is both effective and manageable?',
    options: ['a. Tradeoffs between simplicity and complexity in cybersecurity include ease of use, manageability, cost, and effectiveness. Balancing these tradeoffs requires careful planning and ongoing evaluation of the security strategy.',
    'b. Simplicity and complexity in cybersecurity are not related and have no impact on the effectiveness of a security strategy.',
    'c. Balancing the tradeoffs between simplicity and complexity in cybersecurity involves prioritizing simplicity over effectiveness, rather than finding a balance between the two.'],
    correctAnswer: 'a. Tradeoffs between simplicity and complexity in cybersecurity include ease of use, manageability, cost, and effectiveness. Balancing these tradeoffs requires careful planning and ongoing evaluation of the security strategy.',
    cashPrize: 1000
    }
];

export default questions;