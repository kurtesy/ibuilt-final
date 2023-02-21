const initialState = {
  bedrooms: [
    {
      id: 1,
      length: 0,
      breadth: 0,
      minLength: 8,
      maxLength: 20,
      minBreadth: 8,
      maxBreadth: 20,
      area: 0,
      position: { x: 0, y: 0 },
      toiletRequired: 1,
      walls: [
        {
          side: 'front',
          length: 0,
          thickness: 6,
          hasGaps: false,
          hasDoor: true,
          doorPosition: { top: 0, right: 18 },
          position: { top: undefined, bottom: 0, left: 0, right: undefined }
        },
        {
          side: 'back',
          length: 0,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'left',
          length: 0,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'right',
          length: 15,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: undefined, right: 0 }
        }
      ]
    },
    {
      id: 2,
      length: 8,
      breadth: 8,
      minLength: 4,
      maxLength: 8,
      minBreadth: 4,
      maxBreadth: 8,
      area: 0,
      position: { x: 0, y: 0 },
      toiletRequired: 1,
      walls: [
        {
          side: 'front',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: true,
          doorPosition: { top: 0, right: 18 },
          position: { top: undefined, bottom: 0, left: 0, right: undefined }
        },
        {
          side: 'back',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'left',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'right',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: undefined, right: 0 }
        }
      ]
    },
    {
      id: 3,
      length: 8,
      breadth: 8,
      minLength: 8,
      maxLength: 20,
      minBreadth: 8,
      maxBreadth: 20,
      area: 0,
      position: { x: 0, y: 0 },
      toiletRequired: 1,
      walls: [
        {
          side: 'front',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: true,
          doorPosition: { top: 0, right: 18 },
          position: { top: undefined, bottom: 0, left: 0, right: undefined }
        },
        {
          side: 'back',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'left',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'right',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: undefined, right: 0 }
        }
      ]
    },
    {
      id: 4,
      length: 8,
      breadth: 8,
      minLength: 8,
      maxLength: 20,
      minBreadth: 8,
      maxBreadth: 20,
      area: 0,
      position: { x: 0, y: 0 },
      toiletRequired: 1,
      walls: [
        {
          side: 'front',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: true,
          doorPosition: { top: 0, right: 18 },
          position: { top: undefined, bottom: 0, left: 0, right: undefined }
        },
        {
          side: 'back',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'left',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'right',
          length: 8,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: undefined, right: 0 }
        }
      ]
    }
  ],
  toilets: [
    {
      id: 1,
      length: 4,
      breadth: 4,
      minLength: 4,
      maxLength: 8,
      minBreadth: 4,
      maxBreadth: 8,
      area: 0,
      position: { x: 0, y: 0 },
      walls: [
        {
          side: 'front',
          length: 4,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          doorPosition: { top: 0, right: 18 },
          position: { top: undefined, bottom: 0, left: 0, right: undefined }
        },
        {
          side: 'back',
          length: 4,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'left',
          length: 4,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'right',
          length: 4,
          thickness: 6,
          hasGaps: false,
          hasDoor: true,
          doorPosition: { top: 18, right: 0 },
          position: { top: 0, bottom: undefined, left: undefined, right: 0 }
        }
      ]
    },
    {
      id: 2,
      length: 4,
      breadth: 4,
      min: 4,
      max: 8,
      area: 0,
      position: { x: 0, y: 0 },
      walls: [
        {
          side: 'front',
          length: 4,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          doorPosition: { top: 0, right: 18 },
          position: { top: undefined, bottom: 0, left: 0, right: undefined }
        },
        {
          side: 'back',
          length: 4,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'left',
          length: 4,
          thickness: 6,
          hasGaps: false,
          hasDoor: false,
          position: { top: 0, bottom: undefined, left: 0, right: undefined }
        },
        {
          side: 'right',
          length: 4,
          thickness: 6,
          hasGaps: false,
          hasDoor: true,
          doorPosition: { top: 18, right: 0 },
          position: { top: 0, bottom: undefined, left: undefined, right: 0 }
        }
      ]
    }
  ]
}
