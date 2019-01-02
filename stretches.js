export const AREAS = {
  NECK: "Neck",
  LOWER_BACK: "Back",
  GLUTES: "Glutes",
  HAMSTRINGS: "Hamstrings",
  CALVES: "Calves"
};

export const stretches_EN = [
  {
    id: "0",
    name: "Standing Hamstring Stretch",
    oneSided: false,
    instructions: [
      "Keep your feet shoulder width apart, knees slightly bent",
      "Bend forward at the hips and lower your head toward the floor"
    ],
    areas: [AREAS.NECK, AREAS.LOWER_BACK, AREAS.HAMSTRINGS, AREAS.CALVES]
  },
  {
    id: "1",
    name: "Lunging Calf Stretch",
    oneSided: true,
    instructions: [
      "Stand with your feet shoulder width apart and step back with one foot",
      "Keep your back leg straight, and bend your front leg. Try to press both heels into the ground"
    ],
    areas: [AREAS.CALVES]
  },
  {
    id: "3",
    name: "Standing Bent-Over Calf Stretch",
    oneSided: true,
    instructions: [
      "Stand with your feet parallel, then shift one foot to the front",
      "Bend the back knee and keep the front knee straight, then bend at the hips forward toward your front foot",
      "Try to grab onto your front foot and pull your toes toward you",
      "If you cannot reach your toes, make your step larger"
    ],
    areas: [AREAS.CALVES, AREAS.LOWER_BACK, AREAS.HAMSTRINGS]
  },
  {
    id: "4",
    name: "Standing Lunge",
    oneSided: true,
    instructions: [
        "Stand with your legs parallel",
        "Take a large step back with one leg, as large as you feel comfortable without moving the knee of the forward leg past the toes",
        "Straighten the back leg",
    ]
  }
];
