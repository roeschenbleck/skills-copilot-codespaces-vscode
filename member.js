function skillsMember()

{
  return {
    name: "Member",
    description: "A member of the team.",
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The name of the member.",
      },
      role: {
        type: "string",
        description: "The role of the member.",
      },
      skills: {
        type: "array",
        items: {
          type: "string",
          description: "The skills of the member.",
        },
      },
    },
  };
}
 