function smallestSufficientTeam(
  req_skills: string[],
  people: string[][]
): number[] {
  let result: number[];
  const skillSet = new Set<string>(req_skills);
  const skillPeopleMap = new Map<string, number[]>();

  // for (const req_skill of req_skills) {
  //     skillSet.add(req_skill);
  // }
  for (let i = 0; i < people.length; i++) {
    for (const skill of people[i]) {
      const skillPeople = skillPeopleMap.get(skill);
      if (skillPeople) {
        skillPeopleMap.set(skill, [...skillPeople, i]);
      } else {
        skillPeopleMap.set(skill, [i]);
      }
    }
  }

  function check(team: number[], skillSetRequired: Set<string>) {
    if (skillSetRequired.size === 0) {
      if (!result || team.length < result.length) {
        result = [...team];
      }
      return;
    }

    const [reqSkill] = skillSetRequired;
    const skillPeople = skillPeopleMap.get(reqSkill);

    for (const person of skillPeople) {
      const newSkillSetRequired = new Set(skillSetRequired);
      for (const skill of people[person]) {
        newSkillSetRequired.delete(skill);
      }
      check([...team, person], newSkillSetRequired);
    }
  }

  check([], skillSet);

  return result;
}
